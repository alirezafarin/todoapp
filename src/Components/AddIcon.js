import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class AddIcon extends React.Component {

  render() {
    if( !this.props.date.sDay ) {
      return "";
    }

    return(
      <div>
        <Link to="/add" className="add-to-list-icon">
          <i className="fas fa-plus-circle"></i>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { date: state.date };
}

export default connect(mapStateToProps)(AddIcon);