import styles from "./Profile.module.css"

function Profile({ name, tag, location, image, stats }) {
  return (
      <div className={ styles.container }>
          <div className={ styles.profile }>
              <img className={ styles.avatar }
                  src={image}
                  alt="User avatar" />
              <p className={ styles.name}>{ name }</p>
              <p className={ styles.description}>@{ tag }</p>
              <p className={ styles.description}>{ location }</p>
          </div>

          <ul className={ styles.list}>
              <li className={ styles.item}>
                  <span className={ styles.title }>Followers</span>
                  <span className={ styles.quantity}>{ stats.followers }</span>
              </li>
              <li className={ styles.item }>
                  <span className={ styles.title }>Views</span>
                  <span className={ styles.quantity }>{ stats.views }</span>
              </li>
              <li className={ styles.item }>
                  <span className={ styles.title }>Likes</span>
                  <span className={ styles.quantity }>{ stats.likes }</span>
              </li>
          </ul>
  </div>
  )
}

export default Profile