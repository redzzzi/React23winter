# cp command
import shutil
import os

# 현재 경로 설정
current_path = "02-5/src/"

# 대상 디렉토리 설정
target_directory = "02-5/src/pages/"

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
    source_file = os.path.join(current_path, "copy", "CopyMe.tsx")
    target_file = os.path.join(target_directory, file_name)
    shutil.copy(source_file, target_file)
