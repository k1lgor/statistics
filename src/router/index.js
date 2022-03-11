import HomeComponent from "../components/HomeComponent.vue";
import PremierLeague from "../components/sub/PremierLeague.vue";
import FACup from "../components/sub/FACup.vue";
import LeagueCup from "../components/sub/LeagueCup.vue";
import ChampionsLeague from "../components/sub/ChampionsLeague.vue";

export const routes = [
	{ path: "/", name: "home", component: HomeComponent },
	{ path: "/premierleague", name: "PL", component: PremierLeague },
	{ path: "/facup", name: "FA", component: FACup },
	{ path: "/leaguecup", name: "LC", component: LeagueCup },
	{ path: "/championsleague", name: "CL", component: ChampionsLeague },
	{ path: "*", redirect: "/premierleague" },
];
