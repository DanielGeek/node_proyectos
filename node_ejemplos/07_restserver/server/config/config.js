// Puerto

process.env.PORT = process.env.PORT || 3000;

// vencimiento token
// 60 segundo
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// SEED de autenticacion
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'