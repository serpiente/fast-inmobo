#!/bin/bash

INPUT="/Users/sergiovillegas/Downloads/gif app_wa.mov"
OUTPUT_DIR="/Users/sergiovillegas/personal/inmobo-landing/public/videos/features"

# Crear carpeta si no existe
mkdir -p "$OUTPUT_DIR"

# Video 1: Reconocimiento de Propiedad (00:00.000-00:03.100)
ffmpeg -y -i "$INPUT" \
  -ss 00:00.000 -to 00:03.100 \
  -vf "setpts=PTS/0.2,drawbox=x=0:y=ih-230:w=iw:h=100:color=black@0.6:t=fill,drawtext=text='Deteccion automatica de inmueble por codigo.':fontsize=28:fontcolor=white:x=(w-text_w)/2:y=h-180" \
  -an -c:v libx264 -profile:v baseline -level 3.1 -pix_fmt yuv420p -movflags +faststart -preset fast -crf 23 \
  "$OUTPUT_DIR/01-reconocimiento-propiedad.mp4"

# Video 2: Asignación de Agente (00:03.100-00:13.200)
ffmpeg -y -i "$INPUT" \
  -ss 00:03.100 -to 00:13.200 \
  -vf "setpts=PTS/0.2,drawbox=x=0:y=ih-230:w=iw:h=100:color=black@0.6:t=fill,drawtext=text='Asignacion inmediata de asesor responsable.':fontsize=28:fontcolor=white:x=(w-text_w)/2:y=h-180" \
  -an -c:v libx264 -profile:v baseline -level 3.1 -pix_fmt yuv420p -movflags +faststart -preset fast -crf 23 \
  "$OUTPUT_DIR/02-asignacion-agente.mp4"

# Video 3: IA Respondiendo Dudas (00:13.200-00:16.400)
ffmpeg -y -i "$INPUT" \
  -ss 00:13.200 -to 00:16.400 \
  -vf "setpts=PTS/0.2,drawbox=x=0:y=ih-230:w=iw:h=100:color=black@0.6:t=fill,drawtext=text='IA responde datos tecnicos de la propiedad.':fontsize=28:fontcolor=white:x=(w-text_w)/2:y=h-180" \
  -an -c:v libx264 -profile:v baseline -level 3.1 -pix_fmt yuv420p -movflags +faststart -preset fast -crf 23 \
  "$OUTPUT_DIR/04-ia-dudas.mp4"

# Video 4: Agendamiento Inteligente (00:16.400-00:22.900)
ffmpeg -y -i "$INPUT" \
  -ss 00:16.400 -to 00:22.900 \
  -vf "setpts=PTS/0.2,drawbox=x=0:y=ih-230:w=iw:h=100:color=black@0.6:t=fill,drawtext=text='La IA propone horarios segun agenda disponible.':fontsize=28:fontcolor=white:x=(w-text_w)/2:y=h-180" \
  -an -c:v libx264 -profile:v baseline -level 3.1 -pix_fmt yuv420p -movflags +faststart -preset fast -crf 23 \
  "$OUTPUT_DIR/05-agendamiento.mp4"

# Video 5: Cierre y Confirmación (00:22.900-00:27.000)
ffmpeg -y -i "$INPUT" \
  -ss 00:22.900 -to 00:27.000 \
  -vf "setpts=PTS/0.2,drawbox=x=0:y=ih-230:w=iw:h=100:color=black@0.6:t=fill,drawtext=text='Confirmacion final del asesor desde el CRM.':fontsize=28:fontcolor=white:x=(w-text_w)/2:y=h-180" \
  -an -c:v libx264 -profile:v baseline -level 3.1 -pix_fmt yuv420p -movflags +faststart -preset fast -crf 23 \
  "$OUTPUT_DIR/06-cierre-confirmacion.mp4"

echo "✅ Todos los videos generados en $OUTPUT_DIR"
