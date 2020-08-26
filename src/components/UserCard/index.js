import React /*, { Component }*/ from 'react';
import styles from './UserCard.module.css';

const UserCard = (props) => {
  const { user } = props;

  return (
    <div className={styles.cardUserContainer}>
      <img className={styles.userAvatar} src={user.avatarLink} alt="avatar" />
      <h1>{`${user.name} ${user.lastName}`}</h1>
      <p>{`${user.comment}`}</p>
      <span>{`${user.commentDate}`}</span>
    </div>
  );
};

export default UserCard;

/*export default class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'John',
        lastName: 'Smith',
        avatarLink:
          'https://upload.wikimedia.org/wikipedia/ru/d/da/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80_3.jpg',
        comment: 'Some text about something',
        commentDate: new Date(),
      },
    };
  }

  render() {
    const {
      name,
      lastName,
      avatarLink,
      comment,
      commentDate,
    } = this.state.user;
    return (
      <div className={styles.cardUserContainer}>
        <img className={styles.userAvatar} src={avatarLink} alt="avatar" />
        <h1>{`${name} ${lastName}`}</h1>
        <p>{`${comment}`}</p>
        <span>{`${commentDate}`}</span>
      </div>
    );
  }
}*/
