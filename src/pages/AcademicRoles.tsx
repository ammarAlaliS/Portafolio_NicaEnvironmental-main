import PageLayout from '../components/PageLayout'
import Footer from '../components/Footer'
import styles from '../styles/PageLayout.module.css'

export default function AcademicRoles() {
    return (
        <PageLayout>
            <div className={styles.contentWrapper}>
                <h1 className={styles.pageTitle}>Academic Roles</h1>

                <div className={styles.academicItem}>
                    <div className={styles.academicHeader}>
                        <h2 className={styles.roleTitle}>Adjunct Professor</h2>
                        <span className={styles.duration}>2021 - Present</span>
                    </div>
                    <h3 className={styles.institution}>Universidad Nacional de Ingeniería • Managua, Nicaragua</h3>
                    <p className={styles.description}>
                        Teaching undergraduate courses in Environmental Engineering, including Water Treatment Systems, Environmental Impact Assessment, and Sustainable Development. Mentoring senior capstone projects focused on environmental solutions for local communities.
                    </p>
                    <h4 className={styles.sectionTitle}>Courses Taught:</h4>
                    <ul className={styles.responsibilities}>
                        <li>Water Treatment Systems</li>
                        <li>Environmental Impact Assessment</li>
                        <li>Sustainable Development</li>
                        <li>Environmental Chemistry</li>
                    </ul>
                    <h4 className={styles.sectionTitle}>Achievements:</h4>
                    <ul className={styles.responsibilities}>
                        <li>Mentored 25+ capstone projects</li>
                        <li>Developed new curriculum for Water Treatment course</li>
                        <li>Student satisfaction rating: 4.8/5.0</li>
                    </ul>
                </div>

                <div className={styles.academicItem}>
                    <div className={styles.academicHeader}>
                        <h2 className={styles.roleTitle}>Research Associate</h2>
                        <span className={styles.duration}>2019 - 2021</span>
                    </div>
                    <h3 className={styles.institution}>Rice University • Houston, TX, USA</h3>
                    <p className={styles.description}>
                        Conducted advanced research in environmental engineering with focus on climate change adaptation and water resource management. Published 5 peer-reviewed papers in international journals. Collaborated with interdisciplinary teams on NSF-funded projects.
                    </p>
                    <h4 className={styles.sectionTitle}>Research Areas:</h4>
                    <ul className={styles.responsibilities}>
                        <li>Climate Change Adaptation</li>
                        <li>Water Resource Management</li>
                        <li>Sustainable Wastewater Treatment</li>
                    </ul>
                    <h4 className={styles.sectionTitle}>Achievements:</h4>
                    <ul className={styles.responsibilities}>
                        <li>5 peer-reviewed publications</li>
                        <li>$500K grant funding secured</li>
                        <li>Presented at 8 international conferences</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </PageLayout>
    )
}
