// تم استبدال 'localhost' بالعنوان '127.0.0.1' لحل مشكلة الصلاحيات (Error 1130)
const connection = mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1', 
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'maintenance_app'
});

connection.connect(err => {
    if (err) {
        console.error('❌ خطأ في الاتصال بقاعدة البيانات:', err.message);
        console.log('💡 نصيحة: تأكد من تشغيل MySQL من لوحة تحكم XAMPP.');
    } else {
        console.log('✅ متصل بقاعدة البيانات بنجاح (Host: 127.0.0.1)');
    }
});

// تصدير الاتصال لاستخدامه في server.js وبقية ملفات المشروع
module.exports = connection;
