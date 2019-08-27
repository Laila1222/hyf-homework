use hyf19;

-- 1. Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Saving a  moth', 'Put out a moth, that is trying to fly out by your window', '2019-08-19', '2019-08-20', '2019-08-21', 1, 5);

-- 2. Change the title of a task with these attributes: taskID, newTitle
update task set title = 'newTitle' where id = 36;

-- 3. Change the task due date with these attributes: taskID, newDueDate
update task set due_date = '2019-08-20 15:29:05' where id = 36;

-- 4. Change the task status with these attributes: taskID, newStatus
update task set status_id = 2 where id = 36;

-- 5. Mark a task as complete with this attribute: taskID
update task set status_id = 3 where id = 36;

-- 6. Delete task with this attribute: taskID
delete from task where id = 36;
