import { currentDate } from "./date";

export const sortTasks = (tasks) => {
	const { inProgressTasks, completedTasks, overdueTasks } = tasks.reduce(
		(accumulator, item) => {
			const date = currentDate(new Date());

			if (item.completed) {
				accumulator.completedTasks.push(item);
			} else if (date >= item.deadline) {
				accumulator.overdueTasks.push(item);
			} else {
				accumulator.inProgressTasks.push(item);
			}

			return accumulator;
		},
		{
			inProgressTasks: [],
			completedTasks: [],
			overdueTasks: [],
		}
	);
	inProgressTasks.reverse();
	completedTasks.reverse();
	overdueTasks.reverse();

	return { inProgressTasks, completedTasks, overdueTasks };
};
