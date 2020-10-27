import Figure from "../SanityCustomComponents/figure"
import Highlight from "../SanityCustomComponents/highlight"
import Youtube from "../SanityCustomComponents/youtube"
import HorizontalLine from "../SanityCustomComponents/line"
import Twitter from "../SanityCustomComponents/tweet"
import Instagram from "../SanityCustomComponents/instagram"
import Code from "../SanityCustomComponents/code"
import FontSans from "../SanityCustomComponents/font-sans"
import FontSerif from "../SanityCustomComponents/font-serif"

const serializers = {
  types: {
    figure: Figure,
    youtube: Youtube,
    line: HorizontalLine,
    tweet: Twitter,
    instagram: Instagram,
    code: Code,
  },
  marks: {
    highlight: Highlight,
    fontsans: FontSans,
    fontserif: FontSerif,
  },
}

export default serializers
