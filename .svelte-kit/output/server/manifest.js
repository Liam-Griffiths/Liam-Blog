export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["blog/childhoods-end.md","blog/demolished-man.md","blog/fall-of-moondust.md","blog/markdown-cheatsheet.md","blog/project-hail-mary.md","blog/rendezvous-with-rama.md","blog/roadkill.md","favicon.png","images/childhoodsend.jpg","images/default.jpg","images/demoman.jpg","images/hailmary.png","images/me.jpg","images/moondust.jpg","images/rama.jpg","images/roadkill.jpg","resume.md"]),
	mimeTypes: {".md":"text/markdown",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c0bb4fc9.js","imports":["_app/immutable/entry/start.c0bb4fc9.js","_app/immutable/chunks/index.3254f48f.js","_app/immutable/chunks/singletons.0e1422ac.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.ce6e5e76.js","imports":["_app/immutable/entry/app.ce6e5e76.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.3254f48f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/experience",
				pattern: /^\/experience\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
