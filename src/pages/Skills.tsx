import PageLayout from '../components/PageLayout'
import Footer from '../components/Footer'
import styles from '../styles/PageLayout.module.css'

export default function Skills() {
    return (
        <PageLayout>
            <div className={styles.contentWrapper}>
                <h1 className={styles.pageTitle}>Skills & Expertise</h1>

                <div className={styles.skillsSection}>
                    <h2 className={styles.sectionTitle}>Technical Skills</h2>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillCard}>
                            <h3 className={styles.skillName}>Environmental Modeling</h3>
                            <div className={styles.skillLevel}>
                                <div className={styles.skillBar} style={{ width: '95%' }}></div>
                            </div>
                            <p className={styles.skillDetails}>SWMM, QUAL2K, AERMOD, WASP</p>
                        </div>

                        <div className={styles.skillCard}>
                            <h3 className={styles.skillName}>Water Treatment Design</h3>
                            <div className={styles.skillLevel}>
                                <div className={styles.skillBar} style={{ width: '90%' }}></div>
                            </div>
                            <p className={styles.skillDetails}>Physical, Chemical, and Biological Processes</p>
                        </div>

                        <div className={styles.skillCard}>
                            <h3 className={styles.skillName}>GIS & Remote Sensing</h3>
                            <div className={styles.skillLevel}>
                                <div className={styles.skillBar} style={{ width: '85%' }}></div>
                            </div>
                            <p className={styles.skillDetails}>ArcGIS, QGIS, Google Earth Engine</p>
                        </div>

                        <div className={styles.skillCard}>
                            <h3 className={styles.skillName}>Data Analysis</h3>
                            <div className={styles.skillLevel}>
                                <div className={styles.skillBar} style={{ width: '92%' }}></div>
                            </div>
                            <p className={styles.skillDetails}>R, Python, MATLAB, Statistical Modeling</p>
                        </div>

                        <div className={styles.skillCard}>
                            <h3 className={styles.skillName}>Environmental Compliance</h3>
                            <div className={styles.skillLevel}>
                                <div className={styles.skillBar} style={{ width: '88%' }}></div>
                            </div>
                            <p className={styles.skillDetails}>ISO 14001, NEPA, Environmental Permitting</p>
                        </div>

                        <div className={styles.skillCard}>
                            <h3 className={styles.skillName}>Climate Change Assessment</h3>
                            <div className={styles.skillLevel}>
                                <div className={styles.skillBar} style={{ width: '87%' }}></div>
                            </div>
                            <p className={styles.skillDetails}>Vulnerability Analysis, Adaptation Planning</p>
                        </div>
                    </div>
                </div>

                <div className={styles.skillsSection}>
                    <h2 className={styles.sectionTitle}>Professional Competencies</h2>
                    <div className={styles.competenciesGrid}>
                        <div className={styles.competencyItem}>
                            <span className={styles.competencyIcon}>📊</span>
                            <p className={styles.competencyName}>Project Management</p>
                        </div>
                        <div className={styles.competencyItem}>
                            <span className={styles.competencyIcon}>👥</span>
                            <p className={styles.competencyName}>Team Leadership</p>
                        </div>
                        <div className={styles.competencyItem}>
                            <span className={styles.competencyIcon}>📝</span>
                            <p className={styles.competencyName}>Technical Writing</p>
                        </div>
                        <div className={styles.competencyItem}>
                            <span className={styles.competencyIcon}>🎤</span>
                            <p className={styles.competencyName}>Public Speaking</p>
                        </div>
                        <div className={styles.competencyItem}>
                            <span className={styles.competencyIcon}>🤝</span>
                            <p className={styles.competencyName}>Stakeholder Engagement</p>
                        </div>
                        <div className={styles.competencyItem}>
                            <span className={styles.competencyIcon}>💡</span>
                            <p className={styles.competencyName}>Strategic Planning</p>
                        </div>
                    </div>
                </div>

                <div className={styles.skillsSection}>
                    <h2 className={styles.sectionTitle}>Languages</h2>
                    <div className={styles.languagesGrid}>
                        <div className={styles.languageItem}>
                            <span className={styles.languageName}>Spanish</span>
                            <span className={styles.languageLevel}>Native</span>
                        </div>
                        <div className={styles.languageItem}>
                            <span className={styles.languageName}>English</span>
                            <span className={styles.languageLevel}>Fluent</span>
                        </div>
                        <div className={styles.languageItem}>
                            <span className={styles.languageName}>Portuguese</span>
                            <span className={styles.languageLevel}>Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </PageLayout>
    )
}
