import { FormEventHandler, MouseEventHandler } from "react";
export type logsType = { msg?: string; err?: string };
export type HeaderPropsType = {
	title?: string;
};
export type CenterPropsType = {
	title?: string;
	children?: any;
};
export type FormPropsType = {
	title?: string;
	submit?: any;
	children?: any;
	className?: string;
};
export type InputPropsType = {
	name?: string;
	type?: string;
	value?: string;
	placeholder?: string;
	onChange?: any
	required?: boolean;
	children?: any;
};
export type MainPropsType = {
	title?: string;
	children?: any;
};
export type SidebarPropsType = {
   children?: any;
	logs: Array<Object>;
	setLogs: Function;
}
export type ButtonPropsType = {
	title?: string;
	typeButton?: "submit" | "reset" | "button" | undefined;
	click?: MouseEventHandler<HTMLButtonElement>;
	children?: any;
	name?: string;
	value?: string;
};
export type OptionPropsType = {
	title: string;
	value?: string;
}

export 	type CategoryType = {
	_id?: string;
	title: string;
	status: StatusType;
	comment?: string;
}

export type ActiveCandidate = string | undefined;

export type StateType = Array<CategoryType>;
export type CandidateType = {
	_id?: string;
	categoryId: string;
	name: string;
	status?: string,
	file?: any,
	comment?: string,
};
export type PoolType = {
	_id?: string;
	categoryId: string;
	min: string;
	max: string;
}
export type TicketType = {
	_id?: string;
	ticket: string;
	candidateId: string;
	categoryId: string;
};
export type StatusType = "active" | "archived";
export type FilterStateType = StatusType | "all";