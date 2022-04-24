<template>
  <div>
		<Tabs>
			<Tab title="Basics" icon="fas fa-user">
				<VueFormGenerator
					:schema="schemas.basics"
					:model="resume.content.basics"
					:options="options"
				/>
				<VueFormGenerator
					:schema="schemas.location"
					:model="resume.content.basics.location"
					:options="options"
				/>
			</Tab>

			<Tab title="Profiles" icon="fa fa-users">
				<DynamicForm
					title="Profile"
					:model="resume.content.basics"
					self="profiles"
					:schema="schemas.profile"
				/>
			</Tab>

			<Tab title="Work" icon="fa fa-briefcase">
				<DynamicForm
					title="Work"
					:model="resume.content"
					self="work"
					:schema="schemas.work"
					:subforms="subforms.work"
				/>
			</Tab>

			<Tab title="Education" icon="fa fa-graduation-cap">
				<DynamicForm
					title="Education"
					:model="resume.content"
					self="education"
					:schema="schemas.education"
					:subforms="subforms.education"
				/>
			</Tab>

			<Tab title="Skills" icon="fa fa-lightbulb">
				<DynamicForm
					title="Skill"
					:model="resume.content"
					self="skills"
					:schema="schemas.skills"
					:subforms="subforms.skills"
				/>
			</Tab>

			<Tab title="Awards" icon="fa fa-trophy">
				<DynamicForm
					title="Award"
					:model="resume.content"
					self="awards"
					:schema="schemas.awards"
				/>
			</Tab>
		</Tabs>
	</div>
</template>

<script>
import DynamicForm from './dynamic/DynamicForm';
import ListForm from './dynamic/ListForm';
import Tabs from './tabs/Tabs';
import Tab from './tabs/Tab';

import basics from './schema/basics/basics'
import education from './schema/education'
import skills from './schema/skills'
import awards from './schema/awards'
import location from './schema/basics/location'
import profile from './schema/basics/profile'
import work from './schema/work'
import jsonresume from './jsonresume';

import { component as VueFormGenerator } from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';

export default {
  name: "ResumeForm",
	components: {
		Tabs,
		Tab,
		VueFormGenerator,
		DynamicForm
	},

	props: {
		update: false,
		resume: {
			type: Object,
			default: () => ({
				id: null,
				title: "Resume Title",
				content: jsonresume,
			}),
		}
	},

	data() {
		return {
			schemas: {
				basics,
				location,
				profile,
				work,
				education,
				skills,
				awards
			},
			subforms: {
				work: [
					{
						component: ListForm,
						props: {
							title: 'Highlights',
							self: 'highlights',
							placeholder: 'Started the company'
						}
					},
				],
				education: [
					{
						component: ListForm,
						props: {
							title: 'Courses',
							self: 'courses',
							placeholder: 'DBA1 SQL'
						}
					},
				],
				skills: [
					{
						component: ListForm,
						props: {
							title: 'Keywords',
							self: 'keywords',
							placeholder: 'Javascript'
						}
					},
				]
			},
			options: {
				validateAfterLoad: true,
				validateAfterChanged: true,
				validateAsync: true
			}
		}
	}
};
</script>
