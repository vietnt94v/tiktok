-- Create table videos
CREATE TABLE IF NOT EXISTS `videos`(
  id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  owner_id INT(11) NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  user_avatar TEXT NOT NULL,
  title TEXT,
  comment_count INT(11) DEFAULT 0,
  favorite_count INT(11) DEFAULT 0,
  share_count INT(11) DEFAULT 0,
  music_id INT(11),
  video_status INT(11) DEFAULT 1,
  video_url VARCHAR(255) NOT NULL,
  createdAt DATE NOT NULL,
  updatedAt DATE NOT NULL
) ENGINE = INNODB DEFAULT CHARSET = utf8;