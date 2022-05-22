import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { users } from '../data/users';
import { User } from '../models/Users';

@Resolver()
export class UserResolver {
	private data: User[] = users;

	@Query(() => User)
	async users() {
		return this.data;
	}

	@Query(() => Boolean)
	async auth(@Arg('email') email: string, @Arg('password') password: string) {
		if (!email || !password) {
			return false;
		}

		const isValidUser = this.data.find(
			(user) => user.email === email && user.password === password,
		);

		return !!isValidUser;
	}
}
