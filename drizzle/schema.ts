import { relations, sql } from 'drizzle-orm'
import { foreignKey, integer, pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const Role = pgEnum('Role', ['user', 'system'])

export const UserApiLimit = pgTable('UserApiLimit', {
	id: text('id').notNull().primaryKey().default(sql`cuid()`),
	userId: text('userId').notNull().unique(),
	count: integer('count').notNull(),
	createdAt: timestamp('createdAt', { precision: 3 }).notNull().defaultNow(),
	updatedAt: timestamp('updatedAt', { precision: 3 }).notNull()
});

export const UserSubscription = pgTable('UserSubscription', {
	id: text('id').notNull().primaryKey().default(sql`cuid()`),
	userId: text('userId').notNull().unique(),
	stripeCustomerId: text('stripe_customer_id').unique(),
	stripeSubscriptionId: text('stripe_subscription_id').unique(),
	stripePriceId: text('stripe_price_id'),
	stripeCurrentPeriodEnd: timestamp('stripe_current_period_id', { precision: 3 })
});

export const Category = pgTable('Category', {
	id: text('id').notNull().primaryKey().default(sql`uuid()`),
	name: text('name').notNull()
});

export const Alter = pgTable('Alter', {
	id: text('id').notNull().primaryKey().default(sql`uuid()`),
	userId: text('userId').notNull(),
	userName: text('userName').notNull(),
	src: text('src').notNull(),
	name: text('name').notNull(),
	description: text('description').notNull(),
	instructions: text('instructions').notNull(),
	seed: text('seed').notNull(),
	createdAt: timestamp('createdAt', { precision: 3 }).notNull().defaultNow(),
	updatedAt: timestamp('updatedAt', { precision: 3 }).notNull(),
	categoryId: text('categoryId').notNull()
}, (Alter) => ({
	'Alter_category_fkey': foreignKey({
		name: 'Alter_category_fkey',
		columns: [Alter.categoryId],
		foreignColumns: [Category.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade')
}));

export const Message = pgTable('Message', {
	id: text('id').notNull().primaryKey().default(sql`uuid()`),
	role: Role('role').notNull(),
	content: text('content').notNull(),
	createdAt: timestamp('createdAt', { precision: 3 }).notNull().defaultNow(),
	updatedAt: timestamp('updatedAt', { precision: 3 }).notNull(),
	alterId: text('alterId').notNull(),
	userId: text('userId').notNull()
}, (Message) => ({
	'Message_alter_fkey': foreignKey({
		name: 'Message_alter_fkey',
		columns: [Message.alterId],
		foreignColumns: [Alter.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade')
}));

export const BookmarksCategory = pgTable('BookmarksCategory', {
	id: text('id').notNull().primaryKey().default(sql`uuid()`),
	name: text('name').notNull()
});

export const Bookmarks = pgTable('Bookmarks', {
	id: text('id').notNull().primaryKey().default(sql`uuid()`),
	userId: text('userId').notNull(),
	src: text('src').notNull(),
	name: text('name').notNull(),
	url: text('url').notNull(),
	description: text('description').notNull(),
	createdAt: timestamp('createdAt', { precision: 3 }).notNull().defaultNow(),
	updatedAt: timestamp('updatedAt', { precision: 3 }).notNull(),
	categoryId: text('categoryId').notNull(),
	tags: text('tags').notNull()
}, (Bookmarks) => ({
	'Bookmarks_category_fkey': foreignKey({
		name: 'Bookmarks_category_fkey',
		columns: [Bookmarks.categoryId],
		foreignColumns: [BookmarksCategory.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade')
}));

export const CategoryRelations = relations(Category, ({ many }) => ({
	alters: many(Alter, {
		relationName: 'AlterToCategory'
	})
}));

export const AlterRelations = relations(Alter, ({ one, many }) => ({
	category: one(Category, {
		relationName: 'AlterToCategory',
		fields: [Alter.categoryId],
		references: [Category.id]
	}),
	messages: many(Message, {
		relationName: 'AlterToMessage'
	})
}));

export const MessageRelations = relations(Message, ({ one }) => ({
	alter: one(Alter, {
		relationName: 'AlterToMessage',
		fields: [Message.alterId],
		references: [Alter.id]
	})
}));

export const BookmarksCategoryRelations = relations(BookmarksCategory, ({ many }) => ({
	bookmarks: many(Bookmarks, {
		relationName: 'BookmarksToBookmarksCategory'
	})
}));

export const BookmarksRelations = relations(Bookmarks, ({ one }) => ({
	category: one(BookmarksCategory, {
		relationName: 'BookmarksToBookmarksCategory',
		fields: [Bookmarks.categoryId],
		references: [BookmarksCategory.id]
	})
}));