package online.onestopbeauty.blog.examples.lighthouse.dom;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.*;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import static java.util.Collections.emptyList;
import static java.util.Comparator.naturalOrder;
import static java.util.stream.Collectors.groupingBy;

@Data
@Builder
@JsonPropertyOrder({ "description", "type", "allChildNodesCount", "childNodesSummary" })
public class OsboDomNode {

    private final String type;
    private final String description;
    @JsonIgnore
    @Singular
    private final List<OsboDomNode> childNodes;

    @Getter(AccessLevel.NONE)
    private Integer allChildNodesCount;

    public int getAllChildNodesCount() {
        if (allChildNodesCount == null) {
            allChildNodesCount = this.childNodes.size() + this.childNodes.stream().mapToInt(OsboDomNode::getAllChildNodesCount).sum();
        }
        return allChildNodesCount;
    }

    public List<String> getChildNodesSummary() {
        Integer allChildNodesCount = this.getAllChildNodesCount();
        return this.childNodes.stream().map(child -> percentageInChild(child, allChildNodesCount)).collect(Collectors.toList());
    }

    public List<OsboDomNode> getNodesWithHighestNumberOfChildren() {
        Map<Integer, List<OsboDomNode>> nodesWithChildCount = childNodes.stream().collect(groupingBy(OsboDomNode::getAllChildNodesCount));
        Optional<Integer> maxNodes = nodesWithChildCount.keySet().stream().max(naturalOrder());
        if (maxNodes.isPresent()) {
            return nodesWithChildCount.get(maxNodes.get());
        } else {
            return emptyList();
        }
    }

    private String percentageInChild(OsboDomNode child, Integer allChildNodesCount) {
        double percentage = 100.0 * child.getAllChildNodesCount() / allChildNodesCount;
        return String.format("%d [%.2f%%] in %s %s", child.getAllChildNodesCount(), percentage, child.type, child.description);
    }

    public static OsboDomNode fromElement(Element element) {
        OsboDomNode.OsboDomNodeBuilder builder = OsboDomNode.builder();
        builder.type(element.tag().getName() + "[" + element.siblingIndex() + "]");
        builder.description(element.attributes().toString());

        Elements children = element.children();
        children.forEach(child -> builder.childNode(OsboDomNode.fromElement(child)));
        return builder.build();
    }
}
