import AboutProjectPage from './AboutProjectPage';
import BlogPage from './AboutProjectPage/BlogPage';
import ContactsPage from './AboutProjectPage/ContactsPage';
import DocumentsPage from './AboutProjectPage/DocumentsPage';
import PartnersPage from './AboutProjectPage/PartnersPage';
import TeamPage from './AboutProjectPage/TeamPage';
import BonusesPage from './BonusesPage';
import BonusDetailsPage from './BonusesPage/BonusDetailsPage';
import CompaniesListPage from './AboutProjectPage/CompaniesListPage';
import CompaniesPage from './CompaniesPage';
import CompanyDetailsPage from './CompaniesPage/CompanyDetailsPage';
import CompanyRegistrationPage from './CompaniesPage/CompanyRegistrationPage';
import ContentDetailsPage from './ContentDetailsPage';
import DonationPage from './AboutProjectPage/DonationPage';
import FaqPage from './FaqPage';
import FoundationsListPage from './AboutProjectPage/FoundationsListPage';
import FoundationsPage from './FoundationsPage';
import FoundationDetailsPage from './FoundationsPage/FoundationDetailsPage';
import FoundationsRegistrationPage from './FoundationsPage/FoundationsRegistrationPage';
import LegalPage from './LegalPage';
import NewsPage from './NewsPage';
import NotFoundPage from './NotFoundPage';
import PublicRoot from './PublicRoot';
import RegistrationPage from './RegistrationPage';
import ReviewsPage from './ReviewsPage';
import ReviewsAboutFoundationsPage from './ReviewsPage/ReviewsAboutFoundationsPage';
import ReviewsAboutVolunteersPage from './ReviewsPage/ReviewsAboutVolunteersPage';
import SearchPage from './SearchPage';
import TasksPage from './TasksPage';
import TaskDetailsPage from './TasksPage/TaskDetailsPage';
import TasksArchivePage from './TasksPage/TasksArchivePage';
import TasksInProgressPage from './TasksPage/TasksInProgressPage';
import VolunteersListPage from './AboutProjectPage/VolunteersListPage';
import VolunteersPage from './VolunteersPage';
import VolunteerDetailsPage from './VolunteersPage/VolunteerDetailsPage';
import VolunteersRegistrationPage from './VolunteersPage/VolunteersRegistrationPage';
import WebinarsPage from './WebinarsPage';

export const routes = [
	{
		index: true,
		...PublicRoot,
	},
	{
		path: 'volunteers',
		children: [
			{
				index: true,
				...VolunteersPage,
			},
			{
				path: 'new',
				...VolunteersRegistrationPage,
			},
			{
				path: ':id',
				...VolunteerDetailsPage,
			},
		],
	},
	{
		path: 'foundations',
		children: [
			{
				index: true,
				...FoundationsPage,
			},
			{
				path: 'new',
				...FoundationsRegistrationPage,
			},
			{
				path: ':slug',
				...FoundationDetailsPage,
			},
		],
	},
	{
		path: 'company',
		children: [
			{
				index: true,
				...CompaniesPage,
			},
			{
				path: ':slug',
				...CompanyDetailsPage,
			},
			{
				path: 'new?invite=',
				...CompanyRegistrationPage,
			},
		],
	},
	{
		path: 'registration',
		...RegistrationPage,
	},
	{
		path: 'tasks',
		children: [
			{
				index: true,
				...TasksPage,
			},
			{
				path: 'in_progress',
				...TasksInProgressPage,
			},
			{
				path: 'archive',
				...TasksArchivePage,
			},
			{
				path: ':id',
				...TaskDetailsPage,
			},
		],
	},
	{
		path: 'about_project',
		children: [
			{
				index: true,
				...AboutProjectPage,
			},
			{
				path: 'team',
				...TeamPage,
			},
			{
				path: 'events',
				...BlogPage,
			},
			{
				path: 'documents_and_requisites',
				...DocumentsPage,
			},
			{
				path: 'partners',
				...PartnersPage,
			},
			{
				path: 'contacts',
				...ContactsPage,
			},
			{
				path: 'donation',
				...DonationPage,
			},
			{
				path: 'volunteers_list',
				...VolunteersListPage,
			},
			{
				path: 'foundations_list',
				...FoundationsListPage,
			},
			{
				path: 'company_list',
				...CompaniesListPage,
			},
		],
	},
	{
		path: 'news',
		...NewsPage,
	},
	{
		path: 'content/:slug',
		...ContentDetailsPage,
	},
	{
		path: 'reviews',
		children: [
			{
				index: true,
				...ReviewsPage,
			},
			{
				path: 'about_foundations',
				...ReviewsAboutFoundationsPage,
			},
			{
				path: 'about_volunteers',
				...ReviewsAboutVolunteersPage,
			},
		],
	},
	{
		path: 'search',
		...SearchPage,
	},
	{
		path: 'bonuses',
		children: [
			{
				index: true,
				...BonusesPage,
			},
			{
				path: ':id',
				...BonusDetailsPage,
			},
		],
	},
	{
		path: 'webinars',
		...WebinarsPage,
	},
	{
		path: 'help',
		...FaqPage,
	},
	{
		path: 'legal',
		...LegalPage,
	},
	{
		path: '*',
		...NotFoundPage,
	},
];
