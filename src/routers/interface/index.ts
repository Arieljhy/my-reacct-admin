export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
}
export interface IndexRouteObject {
    	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: true;
	path?: string;
	meta?: MetaProps;
	isLink?: string;
}
export interface NonIndexRouteObject  {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: false;
	path?: string;
	meta?: MetaProps;
	isLink?: string;
}
export declare type RouteObject = IndexRouteObject | NonIndexRouteObject;
// export interface RouteObject {
// 	caseSensitive?: boolean;
// 	children?: RouteObject[];
// 	element?: React.ReactNode;
// 	index?: boolean;
// 	path?: string;
// 	meta?: MetaProps;
// 	isLink?: string;
// }

 