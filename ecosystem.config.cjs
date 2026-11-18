module.exports = {
  apps: [
    {
      name: 'complexti-landing',
      script: 'server.cjs',
      interpreter: '/usr/bin/node',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env: {
        NODE_ENV: 'production',
        PORT: 5001,
      },
    },
  ],
};

// MIGRACAO-USUARIO 2026-11-07: apps rodam como 'complexti' (nao root)
for (const a of module.exports.apps) {
  a.uid = "complexti";
  a.gid = "complexti";
  a.env = Object.assign({}, a.env, { HOME: "/var/lib/complexti" });
  if (!a.error_file) a.error_file = "/opt/lading_page_complexti/logs/" + a.name + "-error.log";
  if (!a.out_file) a.out_file = "/opt/lading_page_complexti/logs/" + a.name + "-out.log";
}
