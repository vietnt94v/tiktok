module.exports = (sequelize, Sequelize) => {
  const Video = sequelize.define('video', {
    owner_id: {
      type: Sequelize.INTEGER(11)
    },
    user_name: {
      type: Sequelize.STRING(255)
    },
    user_avatar: {
      type: Sequelize.STRING(255)
    },
    title: {
      type: Sequelize.STRING(255)
    },
    comment_count: {
      type: Sequelize.INTEGER(11)
    },
    favorite_count: {
      type: Sequelize.INTEGER(11)
    },
    share_count: {
      type: Sequelize.INTEGER(11)
    },
    music_id: {
      type: Sequelize.INTEGER(11)
    },
    video_status: {
      type: Sequelize.DECIMAL(1, 0)
    },
    video_src: {
      type: Sequelize.TEXT
    }
  })
  return Video
}
