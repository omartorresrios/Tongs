class FollowTagsSuggestionsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      activeTags: []
    };
  }

  componentWillMount() {
    this.fetchTags();
    this.token = PubSub.subscribe('TagFollowButton:onClick', (message, data) => {
      this.removeTag(data.tag_id) // POSIBLE CRUSH
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  fetchTags() {
    $.ajax({
      url: '/api/follow_tags_suggestions.json',
      method: 'GET', 
      dataType: 'json',
      success: (data) => {
        console.log(data);
        const newActives = data.slice(0, 6)
        this.setState({ 
          activeTags: newActives,
          tags: [ ...data.slice(6), ...newActives ]
        });
      }
    });
  }

  render () {
    return (
      <div className="follow-suggestions-container">
        <div className="suggestions-header">
          <h4 className="small-heading">¡Cursos en AppName!</h4>
          <a className="refresh-link pull-right" onClick={this.refreshActiveTags.bind(this)}>¿Más cursos?</a>
        </div>
        <div>
          {this.renderSuggestions()}
        </div>
      </div>
    );
  }

  renderSuggestions() {
    if (this.state.tags.length === 0) {
      return <h5>¡Estás siguiendo todos los cursos!</h5>
    }
    return this.state.activeTags.map(tag => {
      return <TagSuggestionItem key={tag.id} {...tag} />
    });
  }

  refreshActiveTags() {
    const newActives = this.state.tags.slice(0, 6);
    this.setState({
      activeTags: newActives,
      tags: [ ...this.state.tags.slice(6), ...newActives ]
    });
  }
  
  removeTag(id) {
    const filteredTags = this.state.tags.filter(tag => {
      if (tag.id === id) {
        removedTag = tag;
      }
      return tag.id !== id;
    });

    this.setState({
      tags: filteredTags
    });
  }
  
}