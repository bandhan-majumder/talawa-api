import envConfig from "~/src/utilities/graphqLimits";
import { Chat } from "./Chat";

Chat.implement({
	fields: (t) => ({
		avatarURL: t.field({
			description: "URL to the avatar of the chat.",
			// Using API_GRAPHQL_SCALAR_FIELD_COST despite having a resolver because resolver only does simple string manipulation
			complexity: envConfig.API_GRAPHQL_SCALAR_FIELD_COST,
			resolve: async (parent, _args, ctx) =>
				parent.avatarName === null
					? null
					: new URL(
							`/objects/${parent.avatarName}`,
							ctx.envConfig.API_BASE_URL,
						).toString(),
			type: "String",
		}),
	}),
});
