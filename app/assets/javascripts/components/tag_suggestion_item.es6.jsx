class TagSuggestionItem extends React.Component {
  render () {
    return (
      <div className="suggestion-item">
        <div>
          <h5><TagPopoverLink tag_id={this.props.id} url={this.props.urlPath} children={this.props.name} /></h5>
        </div>
        <div className="button-wrapper">
          <TagFollowButton
            following={this.props.following}
            tag_id={this.props.id}
          />
        </div>
      </div>
    );
  }
}