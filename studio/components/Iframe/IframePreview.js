import React from "react";
import PropTypes from "prop-types";
import styles from "./IframePreview.css";

const assembleProjectUrl = ({ displayed, options }) => {
  const { slug } = displayed;
  const { previewURL } = options;
  console.log(slug, previewURL);
  if (!slug || !previewURL) {
    console.warn("Missing slug or previewURL", { slug, previewURL });
    return "";
  }
  return `${previewURL}/project/${slug.current}`;
};

class IframePreview extends React.PureComponent {
  static propTypes = {
    document: PropTypes.object // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    document: null
  };

  render() {
    const { options } = this.props;
    const { displayed } = this.props.document;
    if (!displayed) {
      return (
        <div className={styles.componentWrapper}>
          <p>There is no document to preview</p>
        </div>
      );
    }

    const url = assembleProjectUrl({ displayed, options });

    if (!url) {
      return (
        <div className={styles.componentWrapper}>
          <p>Hmm. Having problems constructing the web front-end URL.</p>
        </div>
      );
    }

    return (
      <div className={styles.componentWrapper}>
        <div className={styles.iframeContainer}>
          <iframe src={url} frameBorder={"0"} />
        </div>
      </div>
    );
  }
}

export default IframePreview;
