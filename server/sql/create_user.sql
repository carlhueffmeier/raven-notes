USE raven_dev;

DELETE FROM raven_dev.user;
INSERT INTO raven_dev.user (createdAt, updatedAt, id, email, name, password)
VALUES (current_timestamp(), current_timestamp(), 'user-id-bob', 'bob@raven.io', 'Bob', 'supersecret');

DELETE FROM raven_dev.group;
INSERT INTO raven_dev.group (createdAt, updatedAt, id, name)
VALUES (current_timestamp(), current_timestamp(), 'group-id-raven-dev', 'Raven Dev');

DELETE FROM raven_dev.group_members;
INSERT INTO raven_dev.group_members (createdAt, updatedAt, userId, groupId)
VALUES (current_timestamp(), current_timestamp(), 'user-id-bob', 'group-id-raven-dev');

DELETE FROM raven_dev.note;
INSERT INTO raven_dev.note (createdAt, updatedAt, id, authorId, groupId, contentText)
VALUES (current_timestamp(), current_timestamp(), 'note-id-shopping-list', 'user-id-bob', 'group-id-raven-dev', 'Bobs shopping list');

