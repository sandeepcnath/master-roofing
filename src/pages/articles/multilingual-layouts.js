import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ArticlePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} mainClass="main_article">
      <Seo title="Building multilingual websites with no extra CSS" />
      <h1>Building multilingual websites with no extra CSS</h1>
      <p className="article__intro-text">
        While developing multilingual websites with languages of different
        writing directions, it was inevitable that we had to write CSS to adapt
        the layout for the other language. CSS logical properties and values can
        help you get rid of those hurdles and turn it into a sprint (not the
        Agile one).
      </p>
      <h2>How was it?</h2>
      <p>
        Create the layout for English – an LTR (Left to right) language, and
        then upon completion write CSS to adapt the UI for Arabic, a language
        written from right to left – RTL. Then fix UI bugs for each version
        after QA testing. This is what I used to do. Some use different
        stylesheets for Arabic styles, and others might write the Arabic
        modifier styles just below the style declaration of the element that
        needs to be overridden. The latter used to make more sense, as it meant
        less chance of styles being out of sync.
      </p>
      <p>
        I'm considering the use case of RTL – LTR (English to Arabic) here, as
        it is the most common in this region. Similar applies for
        horizontal-vertical, but I won't be considering that case below. During
        this process, often it is the alignment of elements and text, x-axis
        values of padding, margin, border, and x-axis offsets of positional
        properties that need to be modified. There would be scores of lines to
        reset the properties and to apply new values for it. And the same
        selectors might appear in multiple media queries. Hence, there's a lot
        of room for errors and inconsistencies, also the CSS gets bigger and
        hence harder to maintain.
      </p>
      <p>But we can avoid all this, with legit code and zero hacks.</p>
      <h2>How could it be?</h2>
      <p>
        Enter{" "}
        <a
          href="https://www.w3.org/TR/css-logical-1/"
          title="W3C doc - CSS Logical Properties and Values Level 1"
        >
          CSS logical properties and values
        </a>
        . The logical properties and values provide the author with the ability
        to control layout through logical, rather than physical, direction, and
        dimension mappings. Actually, it's been quite sometime since they
        arrived. Flexbox and CSS Grid became everyone's bestie and saviour right
        on arrival, as the duo saved us from the floats, calc(), negative
        margins, etc and improved the layout process. The duo also helped in
        minimizing the need to rearrange content and to modify margin right and
        left properties for RTL-LTR as we no longer need to use margins to
        separate direct descendants of a Flex or Grid container as the gap
        property does the trick now.
      </p>
      <p>
        But sadly, many seem to be a bit reluctant to hang out with these then
        new kids in the block. They were introduced with a single but important
        objective – to handle layout for websites with multiple languages with
        different writing directions. Hence, I'm sharing it so that these guys
        would get the love they deserve and to give them a chance to make your
        life easier.
      </p>
      <h2>Here we go</h2>
      <h3>Logical Values</h3>
      <p>
        The values we are familiar with – <em>top, right, bottom</em> and{" "}
        <em>left</em> in CSS are called physical directions as they are
        determined by physical dimensions.
      </p>
      <p>
        But we also have the following values –{" "}
        <em>start, end, block-start, block-end, inline-start,</em> and{" "}
        <em>inline-end</em> based on direction of flow of content. You might
        have used start and end while using flexbox and grid, and seen how your
        content adapted automatically when you switched to Arabic.
      </p>
      <p>
        The direction in which the text flows is your inline direction, and the
        cross axis is the block direction. For English, it is horizontally from
        left to right, whereas for Arabic it is from right to left. The mapping
        depends on the element’s writing-mode, direction, and text-orientation,
        but let's keep things simple for now.
      </p>
      <p>
        Following CSS will make the div float left and aligns the text inside it
        to right. As it is often the case, we would need the directions to
        switch for Arabic.
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
