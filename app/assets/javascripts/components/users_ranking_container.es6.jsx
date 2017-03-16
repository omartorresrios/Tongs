class UsersRankingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      activeUsers: []
    };
  }

  componentWillMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    $.ajax({
      url: '/api/users_ranking.json',
      method: 'GET', 
      dataType: 'json',
      success: (data) => {
        console.log(data);
        const newActives = data.slice(0, 6)
        this.setState({ 
          activeUsers: newActives,
          users: [ ...data.slice(6), ...newActives  ]
        });
      }
    });
  }

  render () {
    return (
      <div className="follow-suggestions-container">
        <div className="suggestions-header">
          <h4 className="small-heading">¡Ranking!</h4>
        </div>
        <div>
          {this.renderSuggestions()}
        </div>
      </div>
    );
  }

  renderSuggestions() {
    return this.state.activeUsers.map(user => {
      return <RankingSuggestionItem key={user.id} {...user} />
    });
  }
  
}