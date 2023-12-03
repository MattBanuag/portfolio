import { Article, Div, Figure, Section } from "../../components/containers/Containers.style";
import { H1 } from "../../components/text/Headings.style";
import { Text } from "../../components/text/Paragraphs.style";
import { LandingImage } from "../../components/media/Images.style";
import Portrait from "../../assets/media/LandingPortrait.jpg";

const Landing = () => {
  return (
    <Section isTwoColumns={true} gap="100px">
        <Div>
            <Article>
                <H1>Hey I'm Matthew.</H1>
                <Text bold={true} size="1.3rem" color="#f4845f">
                    Jr. Web Application Developer @ Bit Space Development 
                </Text>
            </Article>
            <Article>
                <Text>
                    Started my programming journey learning HTML, CSS, and PHP. 
                    After working a number of odd jobs after high school, I finally 
                    decided to go all in with programming. There's just something 
                    special about getting "Hello World" to show up on your computer 
                    screen for the first time.
                </Text>
            </Article>
            <Article>
                <Text>
                    Fast forward to today, I'm building cool stuff for the web, 
                    working with awesome like-minded programmers at an amazing virtual 
                    reality company.
                </Text>
            </Article>
            <Article>
                <Text>
                    When I'm not coding, I'm usually hanging out with the fam, 
                    enjoying the outdoors, playing the guitar, or shooting hoops.
                </Text>
            </Article>
        </Div>

        <Figure>
            <LandingImage src={Portrait} alt="Matthew's portrait"/>
        </Figure>
    </Section>
  )
}

export default Landing;