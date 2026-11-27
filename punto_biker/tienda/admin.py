from django.contrib import admin
from .models import Motocicleta, Venta, ConfiguracionPago

@admin.register(Motocicleta)
class MotocicletaAdmin(admin.ModelAdmin):
    list_display = ('id', 'marca', 'modelo', 'anio', 'categoria', 'precio_usd', 'stock')
    list_filter = ('marca', 'anio', 'categoria')
    search_fields = ('marca', 'modelo')

@admin.register(Venta)
class VentaAdmin(admin.ModelAdmin):
    list_display = ('codigo_boleta', 'cliente_nombre', 'metodo_pago', 'moneda', 'total', 'fecha')
    list_filter = ('metodo_pago', 'moneda')

admin.site.register(ConfiguracionPago)