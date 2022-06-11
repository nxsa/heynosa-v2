<template>
	<div class="pg-index">
		<div class="pg-container">
			<div class="contact">
				<div class="--id">
					<h4 class="__name">Nosa Onaiwu</h4>
					<span class="__mail">nos.onaiwu@gmail.com</span>
				</div>
				<div class="__social">
					<a href="https://dribbble.com/nxsa" target="_blank" class="__link">
						<dribbble />
					</a>
					<a
						href="https://www.behance.net/thenxsa"
						target="_blank"
						class="__link"
					>
						<behance />
					</a>
					<a
						href="https://www.linkedin.com/in/nosa-onaiwu-a1b5078a/"
						target="_blank"
						class="__link"
					>
						<linkedin />
					</a>
					<a href="https://github.com/Nxsa" target="_blank" class="__link">
						<github />
					</a>
				</div>
			</div>
			<div class="pg--block">
				<span class="block__title mono__font">About Me</span>
				<div class="block__content">
					<p class="__main--desc">
						I’m Nosa, a product designer focusing on designing and building web
						and mobile applications that solves problems for you, me and
						everyone we know.
					</p>
					<p class="__desc">
						I am passionate about creating, and simplifying complex, digital
						experiences that foster consistent user interactions across a
						product.
					</p>
				</div>
			</div>
			<div class="pg--block">
				<span class="block__title mono__font">Experience</span>
				<div class="block__content">
					<ul class="work-list">
						<li
							class="list-item"
							:class="{ pastRole: !exp.present }"
							v-for="exp in experience"
							:key="exp.id"
						>
							<span class="list__title">{{ exp.company }}</span>
							<div class="list__desc">
								<span class="role">{{ exp.role }}</span> -
								<span class="duration" :class="{ pastRole: !exp.present }">{{
									exp.duration
								}}</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Dribbble from "@/vectors/Dribbble";
import Github from "@/vectors/Github";
import Behance from "@/vectors/Behance";
import Linkedin from "@/vectors/Linkedin";

export default {
	name: "Index",
	components: {
		Github,
		Dribbble,
		Behance,
		Linkedin
	},
	data() {
		return {
			experience: [
				{
					id: 1,
					company: "SameDayCustom",
					role: "Lead Product Designer",
					duration: "March, 2020 to Present",
					present: true
				},
				{
					id: 2,
					company: "MIM Finance Company",
					role: "UI/UX Designer",
					duration: "March, 2022 to Present",
					present: true
				},
				{
					id: 3,
					company: "T40",
					role: "Product Designer",
					duration: "January, 2020  to January, 2021",
					present: false
				},
				{
					id: 4,
					company: "Kobopay Technologies",
					role: "Lead Product Designer",
					duration: "June, 2017 to October, 2021",
					present: false
				},
				{
					id: 5,
					company: "G360Synergy Ltd",
					role: "Product Designer",
					duration: "January, 2017 to December, 2019",
					present: false
				}
			]
		};
	},
	metaInfo: {
		title: "Nosa Onaiwu",
		titleTemplate: "%s - Product Designer"
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
