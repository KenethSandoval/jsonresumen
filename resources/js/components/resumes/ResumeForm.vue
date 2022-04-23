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
					:subforms="subforms.work"
				/>
			</Tab>

			<Tab title="Work" icon="fa fa-briefcase">
				<DynamicForm
					title="Work"
					:model="resume.content"
					self="profiles"
					:schema="schemas.work"
				/>
			</Tab>
		</Tabs>
	</div>
</template>

<script>
import FieldResumeImage from './vfg/FieldResumeImage';
import DynamicForm from './dynamic/DynamicForm';
import ListForm from './dynamic/ListForm';
import Tabs from './tabs/Tabs';
import Tab from './tabs/Tab';
import basics from './schema/basics/basics'
import location from './schema/basics/location'
import profile from './schema/basics/profile'
import work from './schema/work'
import { component as VueFormGenerator } from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';

export default {
  name: "ResumeForm",
	components: {
		Tabs,
		Tab,
		VueFormGenerator,
		FieldResumeImage,
		DynamicForm
	},

	data() {
		return {
			resume: {
				title: '',
				content: {
					basics: {
						location: {},	
					}
				}
			},
			schemas: {
				basics,
				location,
				profile,
				work
			},
			subforms: {
				work: [
					{
						component: ListForm,
						props: {
							title: 'Highlights',
							self: 'highlights'
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
