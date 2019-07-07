package online.onestopbeauty.blog.examples.lighthouse.dom;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import java.io.File;
import java.io.IOException;

public class OsboPerfHelper {

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    public static void main(String[] args) throws IOException {
        String osboUrl = "http://localhost:8081";
        Document doc = Jsoup.connect(osboUrl).get();
        Element body = doc.body();
        OsboDomNode osboDomNode = OsboDomNode.fromElement(body);
        System.out.println((Integer) osboDomNode.getAllChildNodesCount());
        printJson(osboDomNode);

//        printJson(osboDomNode.getNodesWithHighestNumberOfChildren()
//                .get(0)
//                .getNodesWithHighestNumberOfChildren()
//                .get(0)
//                .getNodesWithHighestNumberOfChildren()
//                .get(0)
//                .getNodesWithHighestNumberOfChildren()
//                .get(0)
//                .getChildNodes()
//                .get(0));
    }

    private static void printJson(OsboDomNode osboDomNode) throws IOException {
//        System.out.println(OBJECT_MAPPER.writeValueAsString(osboDomNode));
        File resultFile = new File("domNode.json");
        OBJECT_MAPPER.writeValue(resultFile, osboDomNode);
        System.out.println("Written JSON result into " + resultFile.getAbsolutePath());
    }

}
