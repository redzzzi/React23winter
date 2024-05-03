# cp command
import shutil
import os

copy_path = "src/copy/"
paste_path = "src/pages/"

# 복사할 파일명 리스트
file_names = [
    "EventListener.tsx",
    "OnClick.tsx",
    "ReactOnClick.tsx",
    "EventBubbling.tsx",
    "StopPropagation.tsx",
    "DispatchEvent.tsx",
    "VariousInputs.tsx",
    "OnChange.tsx",
    "FileInput.tsx",
    "DragDrop.tsx",
    "FileDrop.tsx"
]

# 파일을 복사하여 붙여넣기
for file_name in file_names:
    source_file = os.path.join(copy_path, "CopyMe.tsx")
    target_file = os.path.join(paste_path, file_name)
    shutil.copy(source_file, target_file)