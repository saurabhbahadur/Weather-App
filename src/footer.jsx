import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./footer.css"
export default function footer() {
    return (
        <div className='social' >
            < a href="https://www.linkedin.com/in/saurabhbahadur/" > <LinkedInIcon /></a >
            <a href="https://github.com/saurabhbahadur/Weather-App" > <GitHubIcon /> </a>
        </div>
    )
};