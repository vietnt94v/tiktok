module.exports = (sequelize, Sequelize) => {
  const Video = sequelize.define('video', {
    owner_id: {
      type: Sequelize.NUMBER
    },
    user_name: {
      type: Sequelize.BOOLEAN
    },
    user_avatar: {
      type: Sequelize.BOOLEAN
    },
    title: {
      type: Sequelize.BOOLEAN
    },
    comment_count: {
      type: Sequelize.NUMBER
    },
    favorite_count: {
      type: Sequelize.NUMBER
    },
    share_count: {
      type: Sequelize.NUMBER
    },
    music_id: {
      type: Sequelize.NUMBER
    },
    video_status: {
      type: Sequelize.NUMBER
    },
    video_url: {
      type: Sequelize.BOOLEAN
    },
  })
  return Tutorial
}
