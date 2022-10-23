import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ArticlePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} mainClass="main_article">
      <Seo title="Meet and greet with CSS positional properties" />
      <h1>Meet and greet with CSS positional properties</h1>
      <p className="article__intro-text">Lorem Ipsum.</p>
      <h2>position: static;</h2>
      <p>
        You might be wondering why I’m first, even though you rarely use me.
        Kid, everyone starts out as me, then you lot apply other positional
        properties and turn them into positional elements. Unlike them, your
        coordinate values will have no effect on me, as I’m the lone
        non-positioned value.
      </p>
      <h2>position: relative;</h2>
      <p>
        You can say that we stick to our roots. We position ourselves based on
        the offset you provide, relative to our initial position in layout.
        Also, when we do that, we don't vacate the place we occupy in the
        layout, unlike the folks you'll meet next.
      </p>
      <h2>position: absolute;</h2>
      <p>
        You can call us free spirited, if you want. We position ourselves
        absolutely based on the first positioned ancestor's coordinates we could
        find. We don't care where we should have been in the layout after
        render. All that matters to us is the position of our positioned
        ancestor. An element which has got any position value other than static
        is a positioned element. We don't care if it is our parent or an
        ancestor somewhere up in the doc tree. In case if we can't find one,
        then we'll position wrt to the root element, the html.
      </p>
      <p>
        You might say that we cause bugs in the layout, the author of the post
        himself was banned from using position absolute in his layouts for his
        first ever project because of the mess he created.
      </p>
      <p>
        But you can't create layouts without us. The responsible thing to do to
        avoid bugs would be to apply position relative with no coordinates to
        the element you want us to position wrt.
      </p>
      <p>
        Also, like my bro fixed I am also removed from the document flow, hence
        we don't occupy space in layout. You may notice this by seeing how the
        layout shifts once someone gets absolute positioned. Also, we create a
        stacking context and once in a while you’ll have to specify z-index for
        us to decide whether we stay over or under other elements. Please
        refrain from putting values like 10000 to do that, even single digits
        values will do the trick.
      </p>
      <h2>position: fixed;</h2>
      <p>
        As the name suggest, we position based on the coordinated you provide
        wrt the viewport. Used commonly in headers or in the chat icon at the
        corner of the screen.
      </p>
    </Layout>
  )
}

export default ArticlePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
