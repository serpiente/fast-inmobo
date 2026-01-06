#!/bin/bash

INPUT="/Users/sergiovillegas/Downloads/gif app_wa.mov"
OUTPUT_DIR="/Users/sergiovillegas/personal/inmobo-landing/public/videos/features"

# Crear carpeta si no existe
mkdir -p "$OUTPUT_DIR"

# Video 1: Reconocimiento de Propiedad (00:00.000-00:02.850)
ffmpeg -y -i "$INPUT" \
  -ss 00:00.000 -to 00:02.850 \
  -vf "setpts=PTS/0.2,drawbox=x=0:y=ih-230:w=iw:h=100:color=black@0.6:t=fill,drawtext=text='Deteccion automatica de inmueble por codigo.':fontsize=28:fontcolor=white:x=(w-text_w)/2:y=h-180" \
  -an -c:v libx264 -preset fast -crf 23 \
  "$OUTPUT_DIR/01-reconocimiento-propiedad.mp4"

# Video 2: Asignación de Agente (00:02.850-00:08.700)
ffmpeg -y -i "$INPUT" \
  -ss 00:02.850 -to 00:08.700 \
  -vf "setpts=PTS/0.2,drawbox=x=0:y=ih-230:w=iw:h=100:color=black@0.6:t=fill,drawtext=text='Asignacion inmediata de asesor responsable.':fontsize=28:fontcolor=white:x=(w-text_w)/2:y=h-180" \
  -an -c:v libx264 -preset fast -crf 23 \
  "$OUTPUT_DIR/02-asignacion-agente.mp4"

# Video 3: Calificación de Lead (00:08.700-00:12.900)
ffmpeg -y -i "$INPUT" \
  -ss 00:08.700 -to 00:12.900 \
  -vf "setpts=PTS/0.2,drawbox=x=0:y=ih-230:w=iw:h=100:color=black@0.6:t=fill,drawtext=text='Perfilamiento automatico para calificar el interes.':fontsize=28:fontcolor=white:x=(w-text_w)/2:y=h-180" \
  -an -c:v libx264 -preset fast -crf 23 \
  "$OUTPUT_DIR/03-calificacion-lead.mp4"

# Video 4: IA Respondiendo Dudas (00:12.900-00:15.800)
ffmpeg -y -i "$INPUT" \
  -ss 00:12.900 -to 00:15.800 \
  -vf "setpts=PTS/0.2,drawbox=x=0:y=ih-230:w=iw:h=100:color=black@0.6:t=fill,drawtext=text='IA responde datos tecnicos de la propiedad.':fontsize=28:fontcolor=white:x=(w-text_w)/2:y=h-180" \
  -an -c:v libx264 -preset fast -crf 23 \
  "$OUTPUT_DIR/04-ia-dudas.mp4"

# Video 5: Agendamiento Inteligente (00:15.800-00:22.750)
ffmpeg -y -i "$INPUT" \
  -ss 00:15.800 -to 00:22.750 \
  -vf "setpts=PTS/0.2,drawbox=x=0:y=ih-230:w=iw:h=100:color=black@0.6:t=fill,drawtext=text='Gestion de citas: la IA propone horarios segun agenda.':fontsize=28:fontcolor=white:x=(w-text_w)/2:y=h-180" \
  -an -c:v libx264 -preset fast -crf 23 \
  "$OUTPUT_DIR/05-agendamiento.mp4"

# Video 6: Cierre y Confirmación (00:22.750-00:27.000)
ffmpeg -y -i "$INPUT" \
  -ss 00:22.750 -to 00:27.000 \
  -vf "setpts=PTS/0.2,drawbox=x=0:y=ih-230:w=iw:h=100:color=black@0.6:t=fill,drawtext=text='Confirmacion final del asesor desde el CRM.':fontsize=28:fontcolor=white:x=(w-text_w)/2:y=h-180" \
  -an -c:v libx264 -preset fast -crf 23 \
  "$OUTPUT_DIR/06-cierre-confirmacion.mp4"

echo "✅ Todos los videos generados en $OUTPUT_DIR"
