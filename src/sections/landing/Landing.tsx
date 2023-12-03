import { Article, Section } from "../../components/containers/Containers.style";
import { H1 } from "../../components/text/Headings.style";
import { Text } from "../../components/text/Paragraphs.style";

const Landing = () => {
  return (
    <Section>
        <Article>
            <H1>Hey I'm Matthew.</H1>
            <Text bold={true} size="1.3rem" color="#f4845f">
                Jr. Web Application Developer @ Bit Space Development 
            </Text>
        </Article>
    </Section>
  )
}

export default Landing;