class RankingSuggestionItem extends React.Component {
  render () {
    return (
      <div className="suggestion-item">
        <div
          className="avatar-wrapper"
          dangerouslySetInnerHTML={{ __html: this.props.avatar_image_tag }}
        />
        <div>
          <h5><PopoverLink user_id={this.props.id} url={this.props.urlPath} children={this.props.username} /></h5>
        </div>
        <div className="button-wrapper">
          <p> {this.props.validations} </p>
        </div>
      </div>
    );
  }
}