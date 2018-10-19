USE raven_dev;

DELETE FROM raven_dev.group;
DELETE FROM raven_dev.group_members;
DELETE FROM raven_dev.user;
DELETE FROM raven_dev.note;

# Add group 'Fantasyland'
INSERT INTO raven_dev.group (createdAt, updatedAt, id, name)
  VALUES (current_timestamp(), current_timestamp(), 'group-id-fantasyland', 'Fantasyland');
# Add group 'Underworld'
INSERT INTO raven_dev.group (createdAt, updatedAt, id, name)
  VALUES (current_timestamp(), current_timestamp(), 'group-id-underworld', 'Underworld');

# Add user 'Bob'
INSERT INTO raven_dev.user (createdAt, updatedAt, id, email, name, password)
  VALUES (current_timestamp(), current_timestamp(), 'user-id-bob', 'bob@raven.io', 'Bob', 'supersecret');
# Add to group 'Fantasyland' as member
INSERT INTO raven_dev.group_members (createdAt, updatedAt, userId, groupId)
  VALUES (current_timestamp(), current_timestamp(), 'user-id-bob', 'group-id-fantasyland');

# Add user 'Alice'
INSERT INTO raven_dev.user (createdAt, updatedAt, id, email, name, password)
  VALUES (current_timestamp(), current_timestamp(), 'user-id-alice', 'alice@raven.io', 'Alice', 'supersecret');
# Add to group 'Fantasyland' as member
INSERT INTO raven_dev.group_members (createdAt, updatedAt, userId, groupId)
  VALUES (current_timestamp(), current_timestamp(), 'user-id-alice', 'group-id-fantasyland');
  
# Add user 'Eve'
INSERT INTO raven_dev.user (createdAt, updatedAt, id, email, name, password)
  VALUES (current_timestamp(), current_timestamp(), 'user-id-eve', 'eve@raven.io', 'Eve', 'supersecret');
# Add to group 'Underworld' as member
INSERT INTO raven_dev.group_members (createdAt, updatedAt, userId, groupId)
  VALUES (current_timestamp(), current_timestamp(), 'user-id-eve', 'group-id-underworld');

# Add two notes from 'Bob' published in group 'Fantasyland'
INSERT INTO raven_dev.note (createdAt, updatedAt, id, authorId, groupId, contentText)
  VALUES (current_timestamp(), current_timestamp(), 'note-id-b1', 'user-id-bob', 'group-id-fantasyland', 'Bobs shopping list');
INSERT INTO raven_dev.note (createdAt, updatedAt, id, authorId, groupId, contentText)
  VALUES (current_timestamp(), current_timestamp(), 'note-id-b2', 'user-id-bob', 'group-id-fantasyland', 'Bobs favorite movies');

# Add one note from 'Alice' published in group 'Fantasyland'
INSERT INTO raven_dev.note (createdAt, updatedAt, id, authorId, groupId, contentText)
  VALUES (current_timestamp(), current_timestamp(), 'note-id-a1', 'user-id-alice', 'group-id-fantasyland', 'Alices favorite ice creams');

# Add one note from 'Eve' published in group 'Underworld'
INSERT INTO raven_dev.note (createdAt, updatedAt, id, authorId, groupId, contentText)
  VALUES (current_timestamp(), current_timestamp(), 'note-id-e1', 'user-id-eve', 'group-id-underworld', 'Eves list of most dangerous animals');


