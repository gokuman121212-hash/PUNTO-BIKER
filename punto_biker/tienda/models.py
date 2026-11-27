from django.db import models
from django.contrib.auth.models import User

class Motocicleta(models.Model):
    marca = models.CharField(max_length=100)
    modelo = models.CharField(max_length=150)
    categoria = models.CharField(max_length=80)
    anio = models.IntegerField(default=2026)
    cc = models.IntegerField(help_text="Cilindrada en cc")
    hp = models.IntegerField(help_text="Potencia en HP")
    transmision = models.CharField(max_length=80, default="Mecánica 6 Vel.")
    frenos = models.CharField(max_length=80, default="ABS Doble Canal")
    precio_usd = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=5)
    imagen_url = models.URLField(max_length=500, blank=True, null=True)
    destacado = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.marca} {self.modelo} ({self.anio})"


class Venta(models.Model):
    codigo_boleta = models.CharField(max_length=30, unique=True)
    usuario = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    cliente_nombre = models.CharField(max_length=150)
    cliente_email = models.EmailField()
    metodo_pago = models.CharField(max_length=50)
    moneda = models.CharField(max_length=10, default="USD")
    total = models.DecimalField(max_digits=12, decimal_places=2)
    detalle_json = models.JSONField(default=list)
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.codigo_boleta} - {self.cliente_nombre}"


class ConfiguracionPago(models.Model):
    titular = models.CharField(max_length=150, default="PUNTO BIKER S.A.C.")
    telefono_yape_plin = models.CharField(max_length=30, blank=True)
    qr_url = models.TextField(blank=True)
    banco = models.CharField(max_length=80, blank=True)
    numero_cuenta = models.CharField(max_length=80, blank=True)
    cci = models.CharField(max_length=80, blank=True)
    entidad_cip = models.CharField(max_length=120, default="PUNTO BIKER - RECAUDACIÓN CIP")

    def __str__(self):
        return f"Pasarela de Pagos ({self.titular})"