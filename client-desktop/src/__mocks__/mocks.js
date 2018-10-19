const id = 'GciOiJIUzI1NiIsInR5cCI6Ikp';
const name = 'John';
const user = { name, email: 'john@john.com', id };
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
const error = { message: 'there was an error' };
const content = { author: name, contentJSON: { document: 'text' }, contentText: 'text' };
const groupName = 'codeworks';
const groupContent = { members: [user], admins: [user], name: groupName, id };
const layout = 'THREE_COLUMN_LAYOUT';
const modals = true;
export { user, token, error, id, content, groupName, groupContent, layout, modals };
