class FollowingTagList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { followingTags: this.props.followingTags  };
  }

  componentWillMount() {
    PubSub.subscribe('TagFollowButton:onClick', () => {
      this.fetchTags();
    })
  }

  render () {
    return (
      <TagList tags={this.state.followingTags} className="following-tag-list" />
    );
  }

  fetchTags() {
    $.ajax({
      url: '/api/following_tags.json',
      method: 'GET',
      success: (data) => {
        this.setState({ followingTags: data });
      }
    });
  }
}

FollowingTagList.propTypes = {
  followingTags: React.PropTypes.array.isRequired
};