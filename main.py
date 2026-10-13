# Servidor local sencillo (solo librerías estándar). Uso: python main.py
import http.server
import os
import socketserver
import webbrowser

PORT = 8000
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

socketserver.ThreadingTCPServer.allow_reuse_address = True
with socketserver.ThreadingTCPServer(("", PORT), Handler) as s:
    url = f"http://localhost:{PORT}"
    print(f"Página disponible en {url}  (Ctrl+C para detener)")
    webbrowser.open(url)
    try: s.serve_forever()
    except KeyboardInterrupt: print("\nServidor detenido.")