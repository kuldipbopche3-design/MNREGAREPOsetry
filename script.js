let currentLang = 'hi';
const districtData = {
    bhopal: {
        jobCards: '2,45,678',
        days: 78,
        wages: '₹45.2 Cr',
        workers: '1,89,450',
        performance: 'excellent'
    },
    indore: {
        jobCards: '3,12,456',
        days: 85,
        wages: '₹58.7 Cr',
        workers: '2,45,890',
        performance: 'excellent'
    },
    jabalpur: {
        jobCards: '2,89,234',
        days: 72,
        wages: '₹42.8 Cr',
        workers: '2,12,340',
        performance: 'good'
    },
    gwalior: {
        jobCards: '2,67,891',
        days: 68,
        wages: '₹39.5 Cr',
        workers: '1,95,670',
        performance: 'good'
    },
    ujjain: {
        jobCards: '2,34,567',
        days: 75,
        wages: '₹41.3 Cr',
        workers: '1,78,900',
        performance: 'excellent'
    }
};

const translations = {
    hi: {
        mainTitle: 'मनरेगा जिला प्रदर्शन डैशबोर्ड',
        mainSubtitle: 'ग्रामीण रोजगार गारंटी योजना - अपने जिले का प्रदर्शन जानें',
        selectDistrictTitle: '🗺️ अपना जिला चुनें',
        autoDetectText: 'मेरे जिले का पता लगाएं',
        loadingText: 'डेटा लोड हो रहा है...',
        jobCardsLabel: 'कुल जॉब कार्ड',
        jobCardsSub: 'Total Job Cards',
        daysLabel: 'औसत रोजगार दिवस',
        daysSub: 'Average Employment Days',
        wagesLabel: 'कुल मजदूरी',
        wagesSub: 'Total Wages Paid',
        workersLabel: 'सक्रिय कामगार',
        workersSub: 'Active Workers',
        performanceTitle: '📊 प्रदर्शन विश्लेषण',
        badgeText: 'उत्कृष्ट प्रदर्शन',
        metric1Title: 'रोजगार दिवस प्रगति',
        metric1Sub: 'दिन प्रति परिवार',
        metric2Title: 'समय पर भुगतान',
        metric2Sub: '15 दिन के भीतर',
        metric3Title: 'कार्य पूर्णता',
        metric3Sub: 'पूर्ण कार्य / 1,580 कुल',
        metric4Title: 'बजट उपयोग',
        metric4Sub: '₹56.8 Cr / ₹66.8 Cr',
        trend1: 'पिछले महीने से 12% बेहतर',
        trend2: 'पिछले महीने से 8% बेहतर',
        trend3: 'स्थिर प्रदर्शन',
        trend4: 'अच्छा उपयोग',
        trendChartTitle: '📈 पिछले 6 महीनों का रुझान',
        eduTitle: '📚 मनरेगा के बारे में जानें',
        eduCard1Title: 'मनरेगा क्या है?',
        eduCard1Text: 'मनरेगा (महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम) भारत की एक योजना है जो ग्रामीण क्षेत्रों में हर परिवार को साल में कम से कम 100 दिन का रोजगार देने की गारंटी देती है। यह योजना 2005 में शुरू की गई थी।',
        eduCard2Title: 'आपके अधिकार',
        eduCard2Text: 'हर ग्रामीण परिवार को जॉब कार्ड मिल सकता है। आवेदन के 15 दिन में काम मिलना चाहिए। वेतन काम पूरा होने के 15 दिन में मिलना चाहिए। काम पर पानी, छाया और बच्चों की देखभाल की सुविधा मिलनी चाहिए।',
        eduCard3Title: 'शिकायत कैसे करें?',
        eduCard3Text: 'टोल-फ्री नंबर: 1800-111-555 या अपने ग्राम पंचायत या ब्लॉक कार्यालय में जाएं। ऑनलाइन शिकायत: nrega.nic.in पर जाकर अपनी शिकायत दर्ज करें।',
        navStats: 'आंकड़े',
        navPerformance: 'प्रदर्शन',
        navEducation: 'जानकारी',
        navShare: 'शेयर',
        tooltip1: 'यह दर्शाता है कि आपके जिले में औसतन कितने दिन काम मिला। 100 दिन की गारंटी में से जितना ज्यादा, उतना अच्छा।',
        tooltip2: 'कितने प्रतिशत मजदूरों को समय पर वेतन मिला। समय पर मजदूरी मिलना बहुत जरूरी है।',
        tooltip3: 'शुरू किए गए कामों में से कितने काम पूरे हुए। ज्यादा पूरे काम = बेहतर प्रदर्शन।',
        tooltip4: 'मिले हुए बजट में से कितना खर्च हुआ। 70-90% सबसे अच्छा माना जाता है।'
    },
    en: {
        mainTitle: 'MGNREGA District Performance Dashboard',
        mainSubtitle: 'Rural Employment Guarantee Scheme - Know Your District Performance',
        selectDistrictTitle: '🗺️ Select Your District',
        autoDetectText: 'Auto-Detect My District',
        loadingText: 'Loading data...',
        jobCardsLabel: 'Total Job Cards',
        jobCardsSub: 'कुल जॉब कार्ड',
        daysLabel: 'Average Employment Days',
        daysSub: 'औसत रोजगार दिवस',
        wagesLabel: 'Total Wages Paid',
        wagesSub: 'कुल मजदूरी',
        workersLabel: 'Active Workers',
        workersSub: 'सक्रिय कामगार',
        performanceTitle: '📊 Performance Analysis',
        badgeText: 'Excellent Performance',
        metric1Title: 'Employment Days Progress',
        metric1Sub: 'Days per household',
        metric2Title: 'Timely Payment',
        metric2Sub: 'Within 15 days',
        metric3Title: 'Work Completion',
        metric3Sub: 'Completed works / 1,580 total',
        metric4Title: 'Budget Utilization',
        metric4Sub: '₹56.8 Cr / ₹66.8 Cr',
        trend1: '12% better than last month',
        trend2: '8% better than last month',
        trend3: 'Stable performance',
        trend4: 'Good utilization',
        trendChartTitle: '📈 Last 6 Months Trend',
        eduTitle: '📚 Learn About MGNREGA',
        eduCard1Title: 'What is MGNREGA?',
        eduCard1Text: 'MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act) is an Indian scheme that guarantees at least 100 days of employment per year to every rural household. This scheme was launched in 2005.',
        eduCard2Title: 'Your Rights',
        eduCard2Text: 'Every rural household can get a job card. Work should be provided within 15 days of application. Wages should be paid within 15 days of work completion. Facilities like water, shade and childcare should be provided at work sites.',
        eduCard3Title: 'How to File a Complaint?',
        eduCard3Text: 'Toll-free number: 1800-111-555 or visit your Gram Panchayat or Block office. Online complaint: Register your complaint at nrega.nic.in.',
        navStats: 'Stats',
        navPerformance: 'Performance',
        navEducation: 'Information',
        navShare: 'Share',
        tooltip1: 'This shows how many days of work on average were provided in your district. Higher is better out of 100-day guarantee.',
        tooltip2: 'What percentage of workers received wages on time. Timely payment of wages is crucial.',
        tooltip3: 'How many of the started works were completed. More completed works = better performance.',
        tooltip4: 'How much of the allocated budget was spent. 70-90% is considered optimal.'
    }
};

function toggleLanguage() {
    currentLang = currentLang === 'hi' ? 'en' : 'hi';
    document.getElementById('langText').textContent = currentLang === 'hi' ? 'English' : 'हिन्दी';
    updateLanguage();
}

function updateLanguage() {
    const t = translations[currentLang];
    for (const key in t) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = t[key];
        }
    }
}

function loadDistrictData() {
    const select = document.getElementById('districtSelect');
    const district = select.value;

    if (!district) return;

    document.getElementById('loadingSpinner').classList.add('active');
    document.getElementById('mainContent').style.display = 'none';

    setTimeout(() => {
        const data = districtData[district] || districtData.bhopal;

        document.getElementById('totalJobCards').textContent = data.jobCards;
        document.getElementById('employmentDays').textContent = data.days;
        document.getElementById('totalWages').textContent = data.wages;
        document.getElementById('activeWorkers').textContent = data.workers;

        document.getElementById('loadingSpinner').classList.remove('active');
        document.getElementById('mainContent').style.display = 'block';

        setTimeout(() => {
            window.scrollTo({
                top: document.querySelector('.quick-stats').offsetTop - 100,
                behavior: 'smooth'
            });
        }, 100);
    }, 1500);
}

function autoDetectDistrict() {
    alert('स्थान पहचान सुविधा जल्द आ रही है!\nLocation detection feature coming soon!');
}

function scrollToSection(section) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');

    let target;
    switch (section) {
        case 'stats':
            target = document.querySelector('.quick-stats');
            break;
        case 'performance':
            target = document.querySelector('.dashboard');
            break;
        case 'education':
            target = document.querySelector('.educational-section');
            break;
    }

    if (target) {
        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
        });
    }
}

function shareData() {
    if (navigator.share) {
        navigator.share({
            title: 'MGNREGA District Performance',
            text: 'Check out MGNREGA performance in your district!',
            url: window.location.href
        });
    } else {
        alert('अपने जिले का प्रदर्शन अपने मित्रों के साथ साझा करें!\nShare your district performance with friends!');
    }
}

