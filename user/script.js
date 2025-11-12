
        // User data (in a real app, this would come from an API)
        const userData = {
            name: 'John Doe',
            plan: 'basic', // 'basic' or 'pro'
            websites: {
                total: 5,
                limit: 10,
                active: 3
            },
            storage: {
                used: 2.4,
                limit: 5
            },
            visitors: 12500
        };

        // Initialize dashboard
        function initDashboard() {
            // Set user name and avatar
            document.getElementById('userName').textContent = userData.name;
            const initials = userData.name.split(' ').map(n => n[0]).join('');
            document.getElementById('userAvatar').textContent = initials;

            // Set plan badge
            const planBadge = document.getElementById('planBadge');
            planBadge.textContent = userData.plan.toUpperCase();
            if (userData.plan === 'pro') {
                planBadge.classList.add('pro');
            }

            // Update stats
            document.getElementById('totalWebsites').textContent = userData.websites.total;
            document.getElementById('websiteLimit').textContent = `of ${userData.websites.limit} websites used`;
            const websitePercentage = (userData.websites.total / userData.websites.limit) * 100;
            document.getElementById('websiteProgress').style.width = websitePercentage + '%';

            document.getElementById('storageUsed').textContent = userData.storage.used + ' GB';
            document.getElementById('storageLimit').textContent = `of ${userData.storage.limit} GB used`;
            const storagePercentage = (userData.storage.used / userData.storage.limit) * 100;
            document.getElementById('storageProgress').style.width = storagePercentage + '%';

            document.getElementById('totalVisitors').textContent = formatNumber(userData.visitors);
            document.getElementById('activeSites').textContent = userData.websites.active;
        }

        function formatNumber(num) {
            if (num >= 1000) {
                return (num / 1000).toFixed(1) + 'K';
            }
            return num.toString();
        }

        function createWebsite() {
            alert('Opening website creator...');
            // In a real app, this would navigate to the website creation page
        }

        function openSettings() {
            alert('Opening settings...');
            // In a real app, this would navigate to the settings page
        }

        function upgradePlan() {
            alert('Opening upgrade options...');
            // In a real app, this would show upgrade options
        }

        // Initialize on page load
        initDashboard();
  