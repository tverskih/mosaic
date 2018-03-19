const firebaseAdmin = require('firebase-admin');
const firebase = require('firebase');

const dashboardDatabaseUrl = 'https://mosaic-board.firebaseio.com/';

export function openFirebaseDashboardApp() {

    return firebaseAdmin.initializeApp({
        databaseURL: dashboardDatabaseUrl,
        credential: firebaseAdmin.credential.cert({
            project_id: 'mosaic-board',
            client_email: 'firebase-adminsdk-pkg66@mosaic-board.iam.gserviceaccount.com',
            private_key: decode(process.env['MOSAIC_BOARD_FIREBASE_SERVICE_KEY']!)
        })
    });
}

export function decode(str: string): string {
    // In Travis CI the private key will be incorrect because the line-breaks are escaped.
    // The line-breaks need to persist in the service account private key.
    return (str || '').replace(/\\n/g, '\n');
}
