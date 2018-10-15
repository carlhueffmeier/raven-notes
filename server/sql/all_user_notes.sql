USE raven_dev;

SELECT * FROM raven_dev.note INNER JOIN raven_dev.user ON raven_dev.note.authorId=raven_dev.user.id;