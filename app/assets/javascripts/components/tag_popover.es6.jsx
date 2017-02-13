class TagPopover extends React.Component {
  render () {
    return (
      <div className={`user-popover popover ${this.props.position}`} style={this.cssStyles()}>
        <div className="po-buffer-top" />
        <div className="po-buffer-bottom" />
        <div className="arrow" />
        <div className="flex-container flex-space-btw up-main">
          <div className="up-metadata">
            <h3 className="po-username">
              <a href={this.props.tag.urlPath}>
                {this.props.tag.name}
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }

  cssStyles() {
    if (this.props.position === "bottom") {
      return { transform: 'translate(-50%, 14px)' };
    } else {
      return { transform: 'translate(-50%, -100%)' };
    }
  }
}