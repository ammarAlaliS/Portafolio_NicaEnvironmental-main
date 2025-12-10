import PageLayout from '../components/PageLayout'
import Footer from '../components/Footer'
import styles from '../styles/PageLayout.module.css'

export default function ResearchProjects() {
    return (
        <PageLayout>
            <div className={styles.contentWrapper}>
                <h1 className={styles.pageTitle}>Research Projects</h1>

                <div className={styles.projectItem}>
                    <div className={styles.projectHeader}>
                        <h2 className={styles.projectTitle}>Climate Adaptation in Central American Water Systems</h2>
                        <span className={styles.projectStatus}>Ongoing</span>
                    </div>
                    <p className={styles.projectMeta}>
                        <strong>Funding:</strong> National Science Foundation | <strong>Duration:</strong> 2022-2025 | <strong>Budget:</strong> $450,000
                    </p>
                    <p className={styles.description}>
                        Investigating the impacts of climate change on water resource availability in Central America. Developing adaptive management strategies for municipal water systems to ensure resilience against drought and extreme weather events.
                    </p>
                    <h4 className={styles.sectionTitle}>Objectives:</h4>
                    <ul className={styles.responsibilities}>
                        <li>Assess climate change impacts on regional water systems</li>
                        <li>Develop predictive models for water availability</li>
                        <li>Create adaptive management strategies</li>
                        <li>Engage with local governments and communities</li>
                    </ul>
                    <div className={styles.keyFindings}>
                        <strong>Key Outputs:</strong> 3 publications, 2 conference presentations, Policy brief for regional governments, Management toolkit for water utilities
                    </div>
                </div>

                <div className={styles.projectItem}>
                    <div className={styles.projectHeader}>
                        <h2 className={styles.projectTitle}>Sustainable Industrial Wastewater Treatment</h2>
                        <span className={styles.projectStatus} style={{ background: '#e3f2fd', color: '#1976d2' }}>Completed</span>
                    </div>
                    <p className={styles.projectMeta}>
                        <strong>Funding:</strong> Industry Partnership | <strong>Duration:</strong> 2020-2022 | <strong>Budget:</strong> $200,000
                    </p>
                    <p className={styles.description}>
                        Designed and tested innovative biological treatment systems for textile industry wastewater. Achieved 95% reduction in chemical oxygen demand (COD) using cost-effective microbial consortia.
                    </p>
                    <h4 className={styles.sectionTitle}>Objectives:</h4>
                    <ul className={styles.responsibilities}>
                        <li>Develop cost-effective treatment technology</li>
                        <li>Test at pilot and full scale</li>
                        <li>Technology transfer to industry</li>
                    </ul>
                    <div className={styles.keyFindings}>
                        <strong>Key Outputs:</strong> 2 peer-reviewed publications, Patent application filed, Technology adopted by 5 facilities
                    </div>
                </div>
            </div>
            <Footer />
        </PageLayout>
    )
}
